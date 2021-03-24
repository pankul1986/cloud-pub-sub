const { PubSub } = require("@google-cloud/pubsub");
const pubSubClient = new PubSub();
const subscriptionName = "notification_sub";
const timeout = 60;

const pubsubRepository = require("../repositories/pub-sub-repo");
const { listenForPullMessages, listenForPushMessages } = pubsubRepository;