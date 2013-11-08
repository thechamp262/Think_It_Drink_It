﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var _ageNum4 = "";
    var _baseNum4 = "";
    var _flavNum4 = "";
    var appData = Windows.Storage.ApplicationData.current;
    var roamingSettings = appData.roamingSettings;

    WinJS.UI.Pages.define("/pages/flav_sel/flav_sel.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Binding.processAll(element, age_data.model);
           
            //the following are getting the information for the appropriate data and then changing it to numbers
            //and then storing that information inside var
            _ageNum4 = age_data.get_age_num(roamingSettings.values["Age_name"]);
            _baseNum4 = age_data.get_base_num(roamingSettings.values["Base_name"]);
            _flavNum4 = age_data.get_flav_num(roamingSettings.values["Flav_name"]);

            document.getElementById("flav_sel_header").textContent = "Choose Your Flavor:";

            document.getElementById("age_pic").src = roamingSettings.values["Age_pic"];
            document.getElementById("base_pic").src = roamingSettings.values["Base_pic"];
            document.getElementById("flav1_pic").src = roamingSettings.values["Flav_pic"];

            WinJS.xhr({ url: "resource/data.txt" }).then(function (xhr) {
                var user_flav_sel = JSON.parse(xhr.responseText);
                user_flav_sel.forEach(function (user_flav_sels) {
                    for (var i = 0; i < user_flav_sels[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors.length; i++) {
                        age_data.model.flavor1.push({ sel_flav_name: user_flav_sels[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[i].name, sel_flav_pic: user_flav_sels[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[i].image })
                    }
                });
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
            remove.pop_list(age_data.model.flavor1);
            remove.pop_list(age_data.model.info_page4);
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
    var the_choosenFlav = "";
    WinJS.Namespace.define("flav_sel_clicked", {
      
        clicked: function (flav1) {

            the_choosenFlav = flav1;

            remove.pop_list(age_data.model.info_page4);

            var the_flav_num = age_data.get_flav_sel_num(flav1);

            WinJS.xhr({ url: "resource/data.txt" }).then(function (xhr) {
                var sel_the_flav = JSON.parse(xhr.responseText);
                sel_the_flav.forEach(function (sel_the_flavs) {
                    age_data.model.info_page4.push({ sel_name: sel_the_flavs[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[the_flav_num].name, sel_label: sel_the_flavs[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[the_flav_num].label, sel_info: sel_the_flavs[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[the_flav_num].info, sel_pic: sel_the_flavs[_ageNum4].Base[_baseNum4].flavor[_flavNum4].flavors[the_flav_num].image });
                });
            });
        },

        next_page_boost: function () {
            WinJS.Navigation.navigate('pages/boost/boost.html')

            roamingSettings.values["FlavSel_name"] = the_choosenFlav;
            roamingSettings.values["FlavSel_pic"] = document.getElementById("hidden_flav_pic").src;
            roamingSettings.values["FlavSel_info"] = null;
            roamingSettings.values["FlavSel_price"] = null;
        }

    })

})();
