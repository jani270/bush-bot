import { ArgumentOptions, ArgumentTypeCaster } from 'discord-akairo';

type BushArgumentType =
	| 'string'
	| 'lowercase'
	| 'uppercase'
	| 'charCodes'
	| 'number'
	| 'integer'
	| 'bigint'
	| 'emojint'
	| 'url'
	| 'date'
	| 'color'
	| 'user'
	| 'users'
	| 'member'
	| 'members'
	| 'relevant'
	| 'relevants'
	| 'channel'
	| 'channels'
	| 'textChannel'
	| 'textChannels'
	| 'voiceChannel'
	| 'voiceChannels'
	| 'categoryChannel'
	| 'categoryChannels'
	| 'newsChannel'
	| 'newsChannels'
	| 'storeChannel'
	| 'storeChannels'
	| 'role'
	| 'roles'
	| 'emoji'
	| 'emojis'
	| 'guild'
	| 'guilds'
	| 'message'
	| 'guildMessage'
	| 'relevantMessage'
	| 'invite'
	| 'userMention'
	| 'memberMention'
	| 'channelMention'
	| 'roleMention'
	| 'emojiMention'
	| 'commandAlias'
	| 'command'
	| 'inhibitor'
	| 'listener'
	| 'duration'
	| (string | string[])[]
	| RegExp
	| string;

export interface BushArgumentOptions extends ArgumentOptions {
	type?: BushArgumentType | ArgumentTypeCaster;
}