import mongoose from 'mongoose';

interface MongoDBOptionsInterface {
  protocol: string;
  host: string;
  port: number;
  user: string;
  password: string;
  databaseName: string;
}

export class MongoDBService {
  private readonly protocol: string;
  private readonly host: string;
  private readonly port: number;
  private readonly user: string;
  private readonly password: string;
  private readonly databaseName: string;

  constructor(options: MongoDBOptionsInterface) {
    const { protocol, host, port, user, password, databaseName } = options;

    this.protocol = protocol;
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.databaseName = databaseName;
  }

  public async connect() {
    await mongoose
      .connect(`${this.protocol}://${this.host}:${this.port}`, {
        authSource: 'admin',
        user: this.user,
        pass: this.password,
        dbName: this.databaseName,
      })
      .then(() => {
        console.log('✅ MongoDB connected 🔌📡🚀...');
      })
      .catch((err) => {
        console.group('❌ MongoDB connection error');
        console.log(err);
        console.groupEnd();
      });
  }
}
