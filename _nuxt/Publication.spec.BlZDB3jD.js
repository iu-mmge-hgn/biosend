import{m as a}from"./vue-test-utils.esm-bundler.uucRiquD.js";import{_ as n}from"./Publication.vue.CP6Sp33p.js";import"./entry.kNh3a2ls.js";import"./AbstractAccordion.1LulfAAs.js";describe("Publication.vue",()=>{test("renders all props if provided",()=>{const t={title:"Test Title",author:"Test Author",journal:"Test Journal",year:"2022",link:{text:"Test Link Text",href:"https://example.com",external:!0},abstract:"Test Abstract",issue:"Test Issue",pages:"Test Pages",volume:"Test Volume"},e=a(n,{props:{pub:t},global:{stubs:{NuxtLink:!0}}});expect(e.text()).toContain(t.title),expect(e.text()).toContain(t.author),expect(e.text()).toContain(t.journal),expect(e.text()).toContain(t.year),expect(e.text()).toContain(t.abstract),expect(e.text()).toContain(t.issue),expect(e.text()).toContain(t.pages),expect(e.text()).toContain(t.volume);const o=e.find(".rvt-cta");expect(o.attributes("to")).toBe(t.link.href),expect(o.attributes("target")).toBe(t.link.external?"_blank":"_self")})});
