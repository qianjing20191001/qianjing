({
    handleClick : function(component, event, helper) {
        var modalBody;
        $A.createComponent("c:SimpleAccountEdit", { recordId : component.get('v.acc.Id')},
           function(content, status) {
              modalBody = content;
               if (status === "SUCCESS") {
                   component.find('popuplib').showCustomModal({
                       header: "Account  Edit",
                       body: modalBody,
                       showCloseButton: true,
                       cssClass: "mymodal",
                   });
               }
           });
    }
})