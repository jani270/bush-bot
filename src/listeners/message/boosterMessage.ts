import { BushListener, type BushClientEvents } from '#lib';
import { MessageType } from 'discord.js';

export default class BoosterMessageListener extends BushListener {
	public constructor() {
		super('boosterMessage', {
			emitter: 'client',
			event: 'messageCreate',
			category: 'message'
		});
	}

	public override async exec(...[message]: BushClientEvents['messageCreate']) {
		if (!message.guild || !(await message.guild?.hasFeature('boosterMessageReact'))) return;
		if (message.type === MessageType.UserPremiumGuildSubscription) {
			return await message.react('<:nitroboost:785160348885975062>').catch(() => {
				void client.console.warn('boosterMessage', `Failed to react to <<${message.id}>>.`);
			});
		}
	}
}
