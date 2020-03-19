import { SayHelloResponse, SayHelloQueryArgs } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `${args.name} love you`
      };
    }
  }
};

export default resolvers;
