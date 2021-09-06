import { BushListener } from '@lib';
import { GuildMember, MessageEmbed } from 'discord.js';
import { BushClientEvents } from '../../lib/extensions/discord.js/BushClientEvents';

export default class BushMuteListener extends BushListener {
	public constructor() {
		super('bushMute', {
			emitter: 'client',
			event: 'bushMute',
			category: 'custom'
		});
	}

	public override async exec(
		...[victim, moderator, guild, reason, caseID, duration, dmSuccess]: BushClientEvents['bushMute']
	): Promise<unknown> {
		const logChannel = await guild.getLogChannel('moderation');
		if (!logChannel) return;
		const user = victim instanceof GuildMember ? victim.user : victim;

		const logEmbed = new MessageEmbed()
			.setColor(util.colors.discord.ORANGE)
			.setTimestamp()
			.setFooter(`CaseID: ${caseID}`)
			.setAuthor(user.tag, user.avatarURL({ dynamic: true, format: 'png', size: 4096 }) ?? undefined)
			.addField('**Action**', `${duration ? 'Temp Mute' : 'Perm Mute'}`, true)
			.addField('**User**', `${user} (${user.tag})`, true)
			.addField('**Moderator**', `${moderator} (${moderator.tag})`, true)
			.addField('**Reason**', `${reason ?? '[No Reason Provided]'}`, true);
		if (duration) logEmbed.addField('**Duration**', util.humanizeDuration(duration), true);
		if (dmSuccess === false) logEmbed.addField('**Additional Info**', 'Could not dm user.');
		return await logChannel.send({ embeds: [logEmbed] });
	}
}