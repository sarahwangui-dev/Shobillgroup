# Property and Article Management with Sanity Clean Content Studio

## 🗂️ Schema Overview

### 🏠 Property

```ts
name: 'property'
fields:
- name (string, required)
- slug (auto-generated from name, required)
- image (with alt text validation)
- size_in_hectares (number, required)
- excerpt (text)
- description (rich text, required)
- location (string)
- price (number)
- owner (reference to owner document)

name: 'article'
fields:
- title (string, required)
- slug (auto-generated from title, required)
- content (rich text, required)
- excerpt (text)
- date (datetime, auto-set to now)
- author (string)


```

### Studio URL

[shobill.sanity.studio](https://shobill.sanity.studio/)
