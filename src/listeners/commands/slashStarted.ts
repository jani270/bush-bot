import { BushCommand } from '../../lib/extensions/BushCommand';
import { BushListener } from '../../lib/extensions/BushListener';
import { BushSlashMessage } from '../../lib/extensions/BushSlashMessage';

export default class SlashStartedListener extends BushListener {
	constructor() {
		super('slashStarted', {
			emitter: 'commandHandler',
			event: 'slashStarted'
		});
	}
	exec(message: BushSlashMessage, command: BushCommand): void {
		this.client.logger.info(
			'SlashCommand',
			`The <<${command.id}>> command was used by <<${message.author.tag}>> in ${
				!message.channel ? `their <<DMs>>` : `<<#${message.channel.name}>> in <<${message.guild?.name}>>`
			}.`,
			true //// I don't want to spam the log channel when people use commands
		);
	}
}