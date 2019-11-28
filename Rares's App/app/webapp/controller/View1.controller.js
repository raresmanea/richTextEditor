sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/richtexteditor/RichTextEditor"],
  function(Controller, RTE) {
    "use strict";

    let oRichTextEditor;
    return Controller.extend(
      "sap.ui.richtexteditor.sample.RichTextEditor.RichTextEditor",

      {
        // sText: "l",

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
            // change: function() {
            //   oRichTextEditor.setValue();
            // }
          });

          // this.getView().setModel(rte, "rte");
          // rte.setBindingContext("OneWay");

          that
            .getView()
            .byId("idVerticalLayout")
            .addContent(oRichTextEditor);

          sap.ui.getCore().applyChanges();
          oRichTextEditor.addButtonGroup("styleselect").addButtonGroup("table");
        },

        // _createRTE: function() {
        //   let sText;
        //   var

        //   return oRichTextEditor;
        // },

        onPress: function() {
          debugger;
          document.getElementById(
            "container-SAPUI5_Demo---View1--textId"
          ).innerHTML = oRichTextEditor.getValue();

          // let textElem = sap.ui.getCore().getElementById("textId");
          // console.log(textElem);

          // console.log(this._createRTE().getValue());
          // oRichTextEditor.setValue(oRichTextEditor.getValue());

          // const textElement = sap.ui
          //   .getCore()
          //   .byId("container-SAPUI5_Demo---View1--textId");
          // textElement.setText(oRichTextEditor.getValue());
        }
      }
    );
  }
);
