function saveSelections(frm)
    {
        var e;
        var setvalue;
        var fildValue;
        var fieldType;
        var index;
        var today = new Date();
        var exp   = new Date(today.getTime()+999*24*60*60*1000);
        var string = "formname=form17152|";
        var n = frm.length;
        for (i = 0; i < n; i++)
        {
            e     = frm[i].name;
            fieldValue  = frm[i].value;
            fieldType   = frm[i].type;
            if (fieldType == "radio")
            {
                for (x=0; x < frm.elements[e].length; x++)
                {
                    if (frm.elements[e][x].checked)
                    {
                        index = x
                    }
                }
                string = string + index + "\|";
            }
            if ((fieldType == "text") ||    (fieldType == "textarea") ||    (fieldType == "select-one"))
            {
                if (e != 'Turing')
                    string = string + frm.elements[e].value + "\|";
            }
            if (fieldType == "checkbox")
            {
                if (frm.elements[e].checked==true)
                {
                    var setvalue = "1";
                }
                if (frm.elements[e].checked==false)
                {
                    var setvalue = "0";
                }
                string = string + setvalue + "\|";
            }
            if (fieldType == "hidden")
            {
                string = string + frm.elements[e].value + "\|";
            }
        }
        document.cookie= "form17152=" + escape(string) +((exp) ? "; expires=" + exp.toGMTString() : "") +'path:/';
    }
    function deleteAllCookies()
    {
        var c=document.cookie.split(";");
        for(var i=0; i<c.length; i++)
        {
            var e=c[i].indexOf("=");
            var n=e>-1?c[i].substr(0,e):c[i];
            document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    function loadSelections(frm)
    {
        var e;
        var z;
        var x;
        var fieldArray;
        var fieldValues;
        var fieldValue;
        var image=document.getElementById("img0");
        var width=image.offsetWidth;
        if (width!=1)
            deleteAllCookies();
        else
        {
            var dc = document.cookie;
            var prefix = "form17152=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1)
            {
                begin = dc.indexOf(prefix);
                if (begin != 0)
                    return null;
            }
            else
            {
                begin += 2;
            }
            var end = document.cookie.indexOf(";", begin);
            if (end == -1)
            {
                end = dc.length;
            }
            fieldValues = unescape(dc.substring(begin + prefix.length, end));
            fieldArray  = fieldValues.split("\|");
            var n = frm.length;
            for (i = 0; i < n; i++)
            {
                e = frm[i].name;
                z = i;
                z++;
                var fieldType  = frm[i].type;
                var fieldValue = fieldArray[z];
                if ((fieldType == "text") ||    (fieldType == "textarea") ||    (fieldType == "select-one"))
                {
                    frm.elements[e].value = fieldValue;
                }
                if (fieldType == "checkbox")
                {
                    fld_checkbox = fieldValue;
                    if (fld_checkbox == "1")
                    {
                        frm.elements[e].checked = true;
                    }
                }
                if (fieldType == "radio")
                {
                    x = fieldValue;
                    frm.elements[e][x].checked = true;
                }
                if (fieldType == "hidden")
                {
                    frm.elements[e].value = fieldValue;
                }
            }
        }
    }
    