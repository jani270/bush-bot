import { BushCommand, type ArgType, type BushMessage, type BushSlashMessage, type OptionalArgType } from '#lib';
import { ApplicationCommandOptionType } from 'discord.js';

export default class TemplateCommand extends BushCommand {
	public constructor() {
		super('template', {
			aliases: ['template'],
			category: 'template',
			description: 'Command description.',
			usage: ['template <requiredArg> [optionalArg]'],
			examples: ['template 1 2'],
			args: [
				{
					id: 'required_argument',
					description: 'This is the first argument.',
					type: 'string',
					prompt: 'What would you like to set your first argument to be?',
					retry: '{error} Pick a valid argument.',
					slashType: ApplicationCommandOptionType.String
				},
				{
					id: 'optional_argument',
					description: 'This is the second argument.',
					type: 'string',
					prompt: 'What would you like to set your second argument to be?',
					retry: '{error} Pick a valid argument.',
					optional: true,
					slashType: ApplicationCommandOptionType.String
				}
			],
			slash: false, //set this to true
			superUserOnly: true,
			ownerOnly: true,
			channel: 'guild',
			hidden: true,
			clientPermissions: (m) => util.clientSendAndPermCheck(m),
			userPermissions: []
		});
	}

	public override async exec(
		message: BushMessage | BushSlashMessage,
		args: { required_argument: ArgType<'string'>; optional_argument: OptionalArgType<'string'> }
	) {
		return await message.util.reply(`${util.emojis.error} Do not use the template command.`);
		args;
	}
}
