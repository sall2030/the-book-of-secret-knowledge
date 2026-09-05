/**
 * TASA11 ecosystem registry.
 * Landing-page doors today; product routes when those surfaces open.
 *
 * Identities (do not merge):
 * - tasa11.com     — the ecosystem
 * - TA_SA11 on X   — media, community, public dialogue
 * - Red Team X     — intelligence development and verification
 */
window.TASA11_ECOSYSTEM = {
  version: "1.1.0",
  identities: {
    ecosystem: { name: "TASA11", url: "/" },
    dialogue: { name: "TA_SA11", url: "https://x.com/TA_SA11" },
    development: { name: "Red Team X", url: "/#red-team-x" }
  },
  core: "TASA11 Intelligence Core",
  layers: [
    "entity-truth",
    "evidence",
    "red-team-x",
    "intelligence-decision-support",
    "outcome-learning"
  ],
  chain: ["data", "evidence", "intelligence", "decision", "learning"],
  domains: [
    {
      id: "racing",
      title: "Racing",
      route: "/racing/",
      anchor: "/#door-racing",
      summary: "Race intelligence and decision support."
    },
    {
      id: "stable",
      title: "Stable",
      route: "/stable/",
      anchor: "/#stable",
      summary: "Living horse intelligence."
    },
    {
      id: "bloodstock",
      title: "Bloodstock",
      route: "/bloodstock/",
      anchor: "/#lifecycle",
      summary: "Pedigree, sales and valuation intelligence."
    },
    {
      id: "red-team",
      title: "Red Team X",
      route: "/red-team/",
      anchor: "/#red-team-x",
      summary: "Expertise, verification and learning."
    },
    {
      id: "agents",
      title: "Expert Agents",
      route: "/agents/",
      anchor: "/#doors",
      summary: "Specialist intelligence interfaces."
    },
    {
      id: "commentary",
      title: "Commentary",
      route: "/commentary/",
      anchor: "/#doors",
      summary: "Live race understanding and storytelling."
    }
  ]
};
