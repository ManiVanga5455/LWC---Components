trigger TaskTrigger on Task (after update) {
TaskTriggerHandler.updateScore(trigger.new);
}