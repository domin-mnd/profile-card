/** All available badge types */
type Badge =
  | "active-developer"
  | "boost-1-month"
  | "boost-2-month"
  | "boost-3-month"
  | "boost-6-month"
  | "boost-9-month"
  | "boost-12-month"
  | "boost-15-month"
  | "boost-18-month"
  | "boost-24-month"
  | "bug-hunter-lv1"
  | "bug-hunter-lv2"
  | "discord-certified-moderator-old"
  | "discord-certified-moderator"
  | "discord-partner-old"
  | "discord-partner"
  | "discord-staff"
  | "early-supporter"
  | "early-verified-bot-developer"
  | "hypesquad-balance-lgbtq"
  | "hypesquad-balance"
  | "hypesquad-bravery-lgbtq"
  | "hypesquad-bravery"
  | "hypesquad-brilliance-lgbtq"
  | "hypesquad-brilliance"
  | "hypesquad-event"
  | "legacy-username"
  | "nitro"
  | "server-owner"
  | "supports-slash-commands";

/** Compare type with "date" metadata */
type DateBadge =
  | "boost-1-month"
  | "boost-2-month"
  | "boost-3-month"
  | "boost-6-month"
  | "boost-9-month"
  | "boost-12-month"
  | "boost-15-month"
  | "boost-18-month"
  | "boost-24-month"
  | "nitro";

/** Compare type with "username" metadata */
type UsernameBadge = "legacy-username";

/** Badge metadata object with all available metadata keys */
interface BadgeData<PromptBadge> {
  /** Include date if badge type is "date" */
  date?: PromptBadge extends keyof typeof DateBadge ? string : never;
  /** Include date if badge type is "usernemae" */
  username?: PromptBadge extends keyof typeof UsernameBadge ? string : never;
}
