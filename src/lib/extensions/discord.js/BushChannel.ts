/* eslint-disable deprecation/deprecation */
import type {
	BushCategoryChannel,
	BushClient,
	BushDMChannel,
	BushNewsChannel,
	BushStageChannel,
	BushStoreChannel,
	BushTextBasedChannel,
	BushTextChannel,
	BushThreadChannel,
	BushVoiceBasedChannel,
	BushVoiceChannel
} from '#lib';
import { Channel, ChannelType, type Snowflake } from 'discord.js';
import type { RawChannelData } from 'discord.js/typings/rawDataTypes';

/**
 * Represents any channel on Discord.
 */
export declare class BushChannel extends Channel {
	public constructor(client: BushClient, data?: RawChannelData, immediatePatch?: boolean);
	public readonly createdAt: Date;
	public readonly createdTimestamp: number;
	public deleted: boolean;
	public id: Snowflake;
	public readonly partial: false;
	public type: ChannelType;
	public delete(): Promise<this>;
	public fetch(force?: boolean): Promise<this>;
	public isText(): this is BushTextChannel;
	public isDM(): this is BushDMChannel;
	public isVoice(): this is BushVoiceChannel;
	public isCategory(): this is BushCategoryChannel;
	public isNews(): this is BushNewsChannel;
	public isStore(): this is BushStoreChannel;
	public isThread(): this is BushThreadChannel;
	public isStage(): this is BushStageChannel;
	public isTextBased(): this is BushTextBasedChannel;
	public isVoiceBased(): this is BushVoiceBasedChannel;
}
