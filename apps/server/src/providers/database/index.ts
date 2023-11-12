import environment from '../../env';
import mongoose, { ConnectOptions, connect as mongoConnect } from 'mongoose';

const connect = async (): Promise<void> => {
	const {
		db: { username, password, cluster, name }
	} = environment;
	const URI = `mongodb+srv://${username}:${password}@${cluster}.1s8ldpk.mongodb.net/${name}`;
	const options: ConnectOptions = {
		writeConcern: { w: 'majority' },
		retryWrites: true
	};

	mongoose.connection.on('connected', () => {
		console.log(`MongoDB connected: ${name}`);
	});

	mongoose.connection.on('error', (err) => {
		console.log(`Mongoose connection error: ${err?.message}`);
	});

	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose disconnected');
	});

	try {
		await mongoConnect(URI, options);
		const characterSchema = new mongoose.Schema({}, { strict: false });
		const CharacterModel = mongoose.model('character', characterSchema);
		const character = new CharacterModel({
			name: 'Goku',
			power: 'Kamehameha'
		});
		await character.save();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error);
		}
	}
};

export { connect };
