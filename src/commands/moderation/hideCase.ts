import { BushCommand, BushMessage, BushSlashMessage, ModLog } from '@lib';

export default class HideCaseCommand extends BushCommand {
	public constructor() {
		super('hideCase', {
			aliases: ['hidecase', 'hide_case', 'showcase', 'show_case', 'coverupmodabuse', 'cover_up_mod_abuse'],
			category: 'moderation',
			description: {
				content: 'Hide a particular modlog case from the modlog command unless the `--hidden` flag is specified',
				usage: 'hideCase <caseID>',
				examples: ['hideCase 9210b1ea-91f5-4ea2-801b-02b394469c77']
			},
			args: [
				{
					id: 'case',
					type: 'string',
					prompt: {
						start: 'What modlog case would you like to hide?',
						retry: '{error} Choose a valid case id.'
					}
				}
			],
			userPermissions: ['MANAGE_MESSAGES'],
			slash: true,
			slashOptions: [
				{
					name: 'case',
					description: 'What modlog case would you like to hide?',
					type: 'STRING',
					required: true
				}
			],
			channel: 'guild'
		});
	}

	public override async exec(message: BushMessage | BushSlashMessage, { case: caseID }: { case: string }): Promise<unknown> {
		if (message.author.id === '496409778822709251')
			return await message.util.reply(`${util.emojis.error} This command is Bestower proof.`);
		const entry = await ModLog.findByPk(caseID);
		if (!entry || entry.pseudo) return message.util.send(`${util.emojis.error} Invalid entry.`);
		if (entry.guild !== message.guild!.id)
			return message.util.reply(`${util.emojis.error} This modlog is from another server.`);
		const action = entry.hidden ? 'now hidden' : 'no longer hidden';
		entry.hidden = !entry.hidden;
		await entry.save();

		return await message.util.reply(`${util.emojis.success} CaseID \`${caseID}\` is ${action}.`);
	}
}