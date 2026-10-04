// Projects and notes in a given language. The English file is the source of
// truth; a translation only overrides the text it contains.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

type ProjectData = CollectionEntry<'projects'>['data'];
export interface Project {
  id: string;
  data: ProjectData;
  /** The entry whose Markdown body should be rendered. */
  body: CollectionEntry<'projects'> | CollectionEntry<'projectsZh'>;
}

const defined = <T extends object>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== '')) as Partial<T>;

export async function getProjects(lang: Lang): Promise<Project[]> {
  const en = await getCollection('projects');
  const zh = lang === 'zh' ? new Map((await getCollection('projectsZh')).map((p) => [p.id, p])) : new Map();

  return en
    .map((p) => {
      const tr = zh.get(p.id) as CollectionEntry<'projectsZh'> | undefined;
      if (!tr) return { id: p.id, data: p.data, body: p };
      const { linkLabels, galleryAlts, galleryCaptions, rackReplaces, ...text } = tr.data;
      const data: ProjectData = {
        ...p.data,
        ...defined(text),
        links: p.data.links.map((l, i) => ({ ...l, label: linkLabels?.[i] ?? l.label })),
        gallery: p.data.gallery.map((g, i) => ({ ...g, alt: galleryAlts?.[i] ?? g.alt, caption: galleryCaptions?.[i] ?? g.caption })),
        rack: p.data.rack && { ...p.data.rack, replaces: rackReplaces ?? p.data.rack.replaces },
      };
      return { id: p.id, data, body: tr.body?.trim() ? tr : p };
    })
    .sort((a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}

type NoteData = CollectionEntry<'notes'>['data'];
export interface Note { id: string; data: NoteData; body: CollectionEntry<'notes'> | CollectionEntry<'notesZh'> }

export async function getNotes(lang: Lang): Promise<Note[]> {
  const en = await getCollection('notes');
  const zh = lang === 'zh' ? new Map((await getCollection('notesZh')).map((n) => [n.id, n])) : new Map();
  return en
    .map((n) => {
      const tr = zh.get(n.id) as CollectionEntry<'notesZh'> | undefined;
      return tr
        ? { id: n.id, data: { ...n.data, ...defined(tr.data) }, body: tr.body?.trim() ? tr : n }
        : { id: n.id, data: n.data, body: n };
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
