import { Task } from 'discord-akairo';
import { BushClient } from './BushClient';

export class BushTask extends Task {
	public declare client: BushClient;
}
