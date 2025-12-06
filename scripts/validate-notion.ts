/**
 * Validates Notion API credentials before build.
 * Run with: bun run validate:notion
 */
const validateNotionConfig = async () => {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_DATABASE_ID;

  console.log('🔍 Validating Notion configuration...');

  if (!token) {
    console.error('❌ NOTION_TOKEN is not set');
    process.exit(1);
  }

  if (!dbId) {
    console.error('❌ NOTION_DATABASE_ID is not set');
    process.exit(1);
  }

  if (!token.startsWith('ntn_')) {
    console.warn('⚠️  NOTION_TOKEN may be invalid (should start with "ntn_")');
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${dbId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': '2024-06-15',
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('❌ Notion API error:', error?.message || response.statusText);
      process.exit(1);
    }

    const database = (await response.json()) as any;
    const title = database?.title?.[0]?.plain_text || 'Untitled';
    console.log(`✅ Notion database validated: ${title}`);
    console.log(`   ID: ${database?.id}`);
    console.log(`   Properties: ${Object.keys(database?.properties ?? {}).join(', ')}`);
  } catch (error) {
    console.error('❌ Failed to validate Notion config:', error);
    process.exit(1);
  }
};

validateNotionConfig();
