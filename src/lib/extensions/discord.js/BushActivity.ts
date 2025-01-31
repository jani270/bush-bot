import type { BushEmoji, BushPresence } from '#lib';
import { Activity } from 'discord.js';
import type { RawActivityData } from 'discord.js/typings/rawDataTypes';

/**
 * Represents an activity that is part of a user's presence.
 */
export class BushActivity extends Activity {
	public declare emoji: BushEmoji | null;

	public constructor(presence: BushPresence, data?: RawActivityData) {
		super(presence, data);
	}
}
