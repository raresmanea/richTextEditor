sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/richtexteditor/RichTextEditor"],
  function(Controller, RTE) {
    "use strict";

    let oRichTextEditor;
    return Controller.extend(
      "sap.ui.richtexteditor.sample.RichTextEditor.RichTextEditor",

      {
        onInit: function() {
          var that = this;
          oRichTextEditor = new RTE({
            editorType: sap.ui.richtexteditor.EditorType.TinyMCE4,
            width: "100%",
            height: "600px",
            customToolbar: true,
            showGroupFont: true,
            showGroupLink: true,
            showGroupInsert: true,
            value: "lala"
          });

          that
            .getView()
            .byId("idVerticalLayout")
            .addContent(oRichTextEditor);

          sap.ui.getCore().applyChanges();
          oRichTextEditor.addButtonGroup("styleselect").addButtonGroup("table");
        },

        onPress: function() {
          debugger;
          document.getElementById(
            "container-SAPUI5_Demo---View1--textId"
          ).innerHTML = oRichTextEditor.getValue();
        }
      }
    );
  }
);
