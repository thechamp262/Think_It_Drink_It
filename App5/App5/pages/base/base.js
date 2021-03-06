﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var num = 0;
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;
    var Age = thinkitdrinkitDataClient.getTable("Base");
    var keepInfo = true;
    WinJS.UI.Pages.define("/pages/base/base.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Binding.processAll(element, age_data.model);
            design.getBase();
            design.changeTextColor();
            document.getElementById("choosen_age").textContent = "Choose Your " + roamingSettings.values["Age_name"] + " Base:";
            document.getElementById("age_p").textContent = "Age: " + roamingSettings.values["Age_name"];
            var the_sel_age = roamingSettings.values["Age_name"];

            document.getElementById("age_pic").src = roamingSettings.values["Age_pic"];

            //sending the users choosen age to the age_data namespace and then receiving a number that will 
            //be used to access the right object on the array

            server.base(the_sel_age);

            if (document.getElementById("sel_base_name").textContent === "Protein") {
                document.getElementById("item_info_label").setAttribute("hidden", true);
            }


        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            remove.pop_list(age_data.model.base)
            //using the removeInfo.js file to delete the last object of the array as long as an item exists
            if (!keepInfo) {
                remove.pop_list(age_data.model.info_page2)
            }        
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });

    var base3 = "";
    WinJS.Namespace.define("base_clicked", {
        clicked: function (base) {
            remove.pop_list(age_data.model.info_page2);

            var updated_base = base.replace(/^\s+/, '').replace(/\s+$/, '');

            base3 = updated_base;
           
            server.base_sub(updated_base);
        },
        next_page_flavor: function () {
            keepInfo = false;
            if (base3 === "Protein") {
                WinJS.Navigation.navigate('pages/protein/protein.html');
                roamingSettings.values["Base_protein"] = true;
            } else {
                WinJS.Navigation.navigate('pages/flavor/flavor.html')
                roamingSettings.values["Base_protein"] = false;
                roamingSettings.values["Base_name"] = base3;
                roamingSettings.values["Base_Vend"] = document.getElementById("b_vend").textContent;
                roamingSettings.values["Base_pic"] = document.getElementById("choosen_base_carry").src;
                roamingSettings.values["Base_info"] = document.getElementById("sel_base_info").textContent;
                roamingSettings.values["Base_price"] = document.getElementById("base_price").textContent;
                roamingSettings.values["Base_price"] = document.getElementById("base_price").textContent;
                roamingSettings.values["Base_label"] = document.getElementById("sel_base_pic").src;
            }
        },
        more_info: function (clicked) {
            roamingSettings.values["Item_choosen"] = clicked;
            roamingSettings.values["Clicked_cat"] = "Base";
            WinJS.Navigation.navigate('pages/item_info/item_info.html');
            keepInfo = true;
        }
    })

})();
