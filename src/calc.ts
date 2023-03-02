export interface Note {
  id: number;
  timestamp: number;
  text: string;
}

export interface Lecture {
  name: string;
  notes: Note[];
}

export function resolveLectures(remote: Lecture, local: Lecture): Lecture {
  const noteIds = Array.from(new Set([...remote.notes.map(e => e.id), ...local.notes.map(e => e.id)]));

  return {
    name: `${local.name} / ${remote.name}`,
    notes: resolveNotes(remote.notes, local.notes),
  };
}

function resolveNotes(remote: Note[], local: Note[]): Note[] {
  const noteIds = Array.from(new Set([...remote.map(e => e.id), ...local.map(e => e.id)]));
  const resolvedNotes: Note[] = [];

  for (const noteId of noteIds) {
    const localNote = local.find(e => e.id === noteId);
    const remoteNote = remote.find(e => e.id === noteId);
    if (localNote && !remoteNote) {
      resolvedNotes.push(localNote);
    } else if (!localNote && remoteNote) {
      resolvedNotes.push(remoteNote);
    } else if (localNote && remoteNote) {
      resolvedNotes.push(resolveNote(remoteNote, localNote));
    }
  }
  return resolvedNotes;
}

function resolveNote(remote: Note, local: Note): Note {
  return {
    id: remote.id,
    timestamp: Math.min(remote.timestamp, local.timestamp),
    text: `${local.text} / ${remote.text}`,
  };
}
