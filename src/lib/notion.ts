import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

// Initialize Notion Client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  cover: string | null;
  tags: string[];
  featured: boolean;
}

export async function fetchPublishedPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    console.error("NOTION_DATABASE_ID is not defined in environment variables");
    return [];
  }

  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    const posts = response.results.map((page: any) => {
      // Helper to safely get properties
      // Note: This assumes specific property types based on the project docs
      const props = page.properties;
      
      const title = props.Title?.title?.[0]?.plain_text ?? "Untitled";
      const slug = props.Slug?.rich_text?.[0]?.plain_text ?? "";
      const date = props.Date?.date?.start ?? new Date().toISOString();
      const summary = props.Summary?.rich_text?.[0]?.plain_text ?? "";
      const featured = props.Featured?.checkbox ?? false;
      
      // Cover image handling (Notion files or external)
      const coverFile = props["Cover Image"]?.files?.[0];
      const cover = coverFile?.file?.url ?? coverFile?.external?.url ?? null;

      const tags = props.Tags?.multi_select?.map((t: any) => t.name) ?? [];

      return {
        id: page.id,
        title,
        slug,
        date,
        summary,
        cover,
        tags,
        featured,
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string) {
  if (!DATABASE_ID) return null;

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (!response.results.length) {
      return null;
    }

    const page = response.results[0];
    return page;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}
