import { Command, CommandOptions } from 'discord-akairo';
import { APIApplicationCommandOption } from 'discord-api-types';
import { BotClient } from './BotClient';

export interface BotCommandOptions extends CommandOptions {
	slashCommandOptions?: APIApplicationCommandOption[];
	description: {
		content: string;
		usage: string;
		examples: string[];
	};
}

export class BotCommand extends Command {
	public client: BotClient;
	constructor(id: string, options?: BotCommandOptions) {
		super(id, options);
		this.options = options;
	}
}
