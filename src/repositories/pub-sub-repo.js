module.exports = {
    publishMessage: async (pubSubClient, topicName, payload) => {
        const dataBuffer = Buffer.from(JSON.stringify(payload));

        const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
        return messageId;
    },