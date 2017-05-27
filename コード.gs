function postSlackMessage() {
  var token = PropertiesService.getScriptProperties().getProperty('nmc_test_hubot');
 
  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得
 
  var options = {
    channelId: "#slack_bot_nmc", //チャンネル名
    userName: "nmc_test_hubot", //投稿するbotの名前
    message: "Hello, nmc" //投稿するメッセージ
  };
 
  slackApp.postMessage(options.channelId, options.message, {username: options.userName});
}
