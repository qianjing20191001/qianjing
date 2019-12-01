({
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.acc.Id")
        });
            navEvt.fire();
    },
    editRecord : function(component, event, helper) {
        helper.showHide(component);
    },
    handleSuccess : function(component, event, helper) {
         helper.showHide(component);
        var recUpdate = $A.get("e.c:recordUpdated");
        recUpdate.fire();
    },
    handleCancel : function(component, event, helper) {
        helper.showHide(component);
        event.preventDefault();
    }
})