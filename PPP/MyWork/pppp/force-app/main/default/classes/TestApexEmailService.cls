global class TestApexEmailService implements Messaging.InboundEmailHandler {
    global Messaging.InboundEmailResult handleInboundEmail(Messaging.inboundEmail email, 
                                                       Messaging.InboundEnvelope env) {
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        String myPlainText= email.plainTextBody;
        Account acc = new Account();
        acc.name='メールサービスから作成';
        insert acc;
        result.success = true;
        return result;
    }
}