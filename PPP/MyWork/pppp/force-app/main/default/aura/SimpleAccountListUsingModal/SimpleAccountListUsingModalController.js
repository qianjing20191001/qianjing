({
	doInit : function(component, event, helper) {
        var action=component.get("c.getAccountList");
        action.setCallback(this,function(response){
            var simpleAccounts=response.getReturnValue();
            component.set("v.simpleAccounts",simpleAccounts);
        });
		$A.enqueueAction(action);        
		
	}
})