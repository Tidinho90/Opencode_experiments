import type { Plugin } from "@opencode-ai/plugin"

export const ExamplePlugin: Plugin = async ({ project, client, $, directory, worktree }) => {
    console.log("Plugin initialized!")
    return {
    // Type-safe hook implementations
  }
}