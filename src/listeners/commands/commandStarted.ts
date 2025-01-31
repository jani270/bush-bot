import { BushListener, type BushCommandHandlerEvents } from '#lib';
import { Severity } from '@sentry/types';
import { ChannelType, GuildTextBasedChannel } from 'discord.js';

export default class CommandStartedListener extends BushListener {
	public constructor() {
		super('commandStarted', {
			emitter: 'commandHandler',
			event: 'commandStarted',
			category: 'commands'
		});
	}

	public override exec(...[message, command]: BushCommandHandlerEvents['commandStarted']): void {
		client.sentry.addBreadcrumb({
			message: `[commandStarted] The ${command.id} was started by ${message.author.tag}.`,
			level: Severity.Info,
			timestamp: Date.now(),
			data: {
				'command.name': command?.id,
				'message.id': message.id,
				'message.type': message.util.isSlash ? 'slash' : 'normal',
				'message.parsed.content': message.util.parsed!.content,
				'channel.id': message.channel.isDM() ? message.channel!.recipient.id : (<GuildTextBasedChannel>message.channel)?.id,
				'channel.name': message.channel.isDM() ? message.channel.recipient.tag : (<GuildTextBasedChannel>message.channel)?.name,
				'guild.id': message.guild?.id,
				'guild.name': message.guild?.name,
				'environment': client.config.environment
			}
		});

		void client.logger.info(
			'commandStarted',
			`The <<${command.id}>> command was used by <<${message.author.tag}>> in ${
				message.channel.type === ChannelType.DM ? `their <<DMs>>` : `<<#${message.channel.name}>> in <<${message.guild?.name}>>`
			}.`,
			true
		);

		client.stats.commandsUsed = client.stats.commandsUsed + 1n;
	}
}
