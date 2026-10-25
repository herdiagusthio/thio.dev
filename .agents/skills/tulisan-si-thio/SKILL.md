---
name: tulisan-si-thio
description: >-
  Use this skill when drafting new blog posts, engineering reflections, or content under the "TulisanSiThio" brand. It enforces the specific structural blueprint, storytelling style, and technical analogy format required for Thio's personal website and LinkedIn Pulse.
---

# Tulisan Si Thio Content Flow

When the user asks to draft a new blog post, follow this exact structure and stylistic guideline.

## Content Blueprint

Every post must follow this 5-part structure:

1. **The Hook (Intro)**
   - Start with a misconception, a realization, or a klise (e.g., "Concurrency is magical... until you look inside").
   - Break the ice immediately.
2. **The Story (Context)**
   - Provide a short anecdote. This could be a chat with a friend, a midnight production incident, or a realization during a code review.
   - Set the scene for *why* this technical topic matters right now.
3. **The Breakdown (The Core Lessons)**
   - Deliver 3 core notes/lessons.
   - Format them clearly, for example using emojis: `📝 Note #1: ...`, `📝 Note #2: ...`
   - **CRITICAL**: You must use a highly relatable, real-world analogy to explain the technical concept (e.g., Chefs in a kitchen for Concurrency vs Parallelism, or a Post Office for NSQ vs Kafka). Do not just explain the tech; explain it through the analogy.
4. **The Takeaway (Conclusion)**
   - Conclude with a philosophical shift in mindset (`💡 My Takeaway`).
   - Summarize the lesson not just as a technical win, but as a mindset evolution.
5. **The Call to Action (CTA)**
   - End with an engaging question for the readers.
   - Use Indonesian or English depending on the prompt (e.g., "Yuk cerita di kolom komentar!" or "Let's talk in the comments!").
   - Always append the hashtags, ensuring `#TulisanSiThio` is the first one.

## Stylistic Guidelines

- **Tone**: Conversational, reflective, storytelling, and humble. Never arrogant. You are a senior engineer sharing war stories and lessons, not a textbook lecturing students.
- **Language**: Match the user's prompt (Indonesian or English). If Indonesian, use casual professional Indonesian (e.g., "bikin", "ngoding", "bareng").
- **Formatting**: 
  - Use short paragraphs (1-3 sentences max) for readability on mobile and LinkedIn.
  - Use bolding for emphasis on key phrases.
  - Use blockquotes (`>`) for quotes, realizations, or core mindset shifts.

## Workflow Execution

1. If the user provides a raw brain-dump, map it directly into the 5-part Blueprint above.
2. Draft the content in a Markdown code block first for the user to review.
3. Once approved, create the file in `second-brain/knowledge/blog/<slug>.md`, never in this repo's `content/blog/` (the sync mirrors second-brain into it and deletes anything else). Frontmatter the build enforces: `title`, `date` (`YYYY-MM-DD`), `status: published`, `tags` (at least one); `summary` is optional but recommended. Without `status: published` the post stays private.
4. Remind the user to run `./ship.sh` to deploy the new post.
