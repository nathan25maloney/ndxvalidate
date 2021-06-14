const contextpath = /*[[@{/}]]*/ "/";
let csrfHeaderName = "X-CSRF-TOKEN";
let csrfValue = "fetch";
let correctLab = ""
const States = ['', 'AB', 'AK', 'AL', 'GJ', 'AR', 'AZ', 'BB', 'BC', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GBR', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'LC', 'MA', 'MB', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NB', 'NC', 'ND', 'NE', 'NL', 'NH', 'NJ', 'NL', 'NM', 'NS', 'NSW', 'NT', 'NV', 'NY', 'OH', 'OK', 'ON', 'OR', 'PA', 'PE', 'PR', 'QC', 'RI', 'SC', 'SD', 'SK', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY', 'YT', 'ABW', 'HTI', 'JA', 'KY1', 'GLS', 'VR', 'BCN', 'NP', 'VIC', 'LB', 'NU', 'NW', 'YU'];
const StateWebsites = {
    AL: 'http://www.dentalboard.org/public/current-rosters/',
    AK: 'https://www.commerce.alaska.gov/cbp/main/Search/Professional',
    AZ: 'https://dentalboard.az.gov/directory',
    AR: 'https://search.statesolutions.us/?A=ASBDE&AID=RS&GUID=20C2E912D0C849AB9ADC2353CD5970EB',
    CA: 'https://search.dca.ca.gov/',
    CO: 'https://apps.colorado.gov/dora/licensing/Lookup/LicenseLookup.aspx',
    CT: 'https://www.elicense.ct.gov/Lookup/LicenseLookup.aspx',
    DE: 'https://delpros.delaware.gov/OH_HomePage',
    DC: 'https://doh.force.com/ver/s/',
    FL: 'https://mqa-internet.doh.state.fl.us/MQASearchServices/Home',
    GA: 'https://gadch.mylicense.com/verification/Search.aspx?facility=N',
    HI: 'https://mypvl.dcca.hawaii.gov/public-license-search/',
    ID: 'https://elitepublic.isbd.idaho.gov/IBODPublic/LPRBrowser.aspx',
    IL: 'https://online-dfpr.micropact.com/Lookup/LicenseLookup.aspx',
    IN: 'https://mylicense.in.gov/EVerification/Search.aspx',
    IA: 'https://eservices.iowa.gov/PublicPortal/Iowa/IDB/licenseQuery/LicenseQuery.jsp',
    KS: 'https://www.kansas.gov/dental-verification/index.do',
    KY: 'https://secure.kentucky.gov/formservices/KYBD/DentistLookup',
    LA: 'https://www.membersbase.com/lsbdweb/licenseverification.htm',
    ME: 'https://www.pfr.maine.gov/almsonline/almsquery/SearchIndividual.aspx',
    MD: 'https://mdbod.mylicense.com/Verification/Search.aspx',
    MA: 'https://checkalicense.hhs.state.ma.us/MyLicenseVerification/',
    MI: 'https://aca-prod.accela.com/MILARA/GeneralProperty/PropertyLookUp.aspx?isLicensee=Y&TabName=APO',
    MN: 'https://bodgl.hlb.state.mn.us/GLSuite_MNBOD_PROD/GLSuiteWeb/Clients/mnbod/Public/Licensee/LicenseeSearch.aspx',
    MS: 'https://www.dentalboard.ms.gov/licensee-search',
    MO: 'https://pr.mo.gov/licensee-search-division.asp',
    MT: 'https://ebizws.mt.gov/PUBLICPORTAL/searchform?mylist=licenses',
    NE: 'https://www.nebraska.gov/LISSearch/search.cgi',
    NV: 'https://dental.nv.gov/Consumers/License_Verification/',
    NH: 'https://www.app-support.nh.gov/licensing/',
    NJ: 'https://newjersey.mylicense.com/verification/Search.aspx',
    NM: 'http://verification.rld.state.nm.us/',
    NY: 'http://www.op.nysed.gov/opsearches.htm',
    NC: 'https://www.membersbase.com/NCBDESearch/license_verification.htm',
    ND: 'https://www.nddentalboard.org/verify/',
    OH: 'https://elicense.ohio.gov/OH_HomePage',
    OK: 'https://www.ok.gov/dentistry/License_Verification/index.html',
    OR: 'https://www.oregon.gov/dentistry/Pages/verify-license.aspx',
    PA: 'https://www.pals.pa.gov/#/page/search',
    RI: 'https://health.ri.gov/find/licensees/index.php?prof=Dental',
    SC: 'https://verify.llronline.com/LicLookup/LookupMain.aspx?AspxAutoDetectCookieSupport=1',
    SD: 'https://www.sdboardofdentistry.org/verify.asp',
    TN: 'https://apps.health.tn.gov/licensure/default.aspx',
    TX: 'http://ls.tsbde.texas.gov/index.php',
    UT: 'https://secure.utah.gov/llv/search/index.html',
    VT: 'https://secure.professionals.vermont.gov/prweb/app/default/ybVBleIGIHMlPa8qpM9BaiNEZfDPENuF*/!STANDARD',
    VA: 'https://dhp.virginiainteractive.org/Lookup/Index',
    WA: 'https://fortress.wa.gov/doh/providercredentialsearch/',
    WV: 'https://wvbodprod.glsuite.us/GLSuiteWeb/Clients/WVBOD/Public/Verification/Search.aspx',
    WI: 'https://licensesearch.wi.gov/',
    WY: 'https://dental.wyo.gov/public/lookup'
}
function DisplayEDoc(data){
    console.log(data);
    console.log(data.doctorNumber);
    document.getElementById("doctorId").value = data.doctorNumber;
    document.getElementById("licenseNo").value = data.licenseNumber;
    document.getElementById("npi").value = data.npinumber;
    document.getElementById("fName").value = data.firstName;
    document.getElementById("lName").value = data.lastName;

    if(data.warning == "no Customer") {
        document.getElementById("mode").value = 0;
        document.getElementById("doctorId").value = "";
        ChangeDisplay(0);
    }
}


function EDoc() {
    if ($("#LabName").val() == 'PAIRW-ADL' || $("#LabName").val() == 'PAIRW-IDA') {
        correctLab = "PAIRW";
    } else if ($("#LabName").val() == 'TXCON' || $("#LabName").val() == 'CAHAW' || $("#LabName").val() == 'CAHAO' || $("#LabName").val() == 'CAHER' || $("#LabName").val() == 'CAELS' || $("#LabName").val() == 'NVLAS' || $("#LabName").val() == 'NYWHI') {
        correctLab = "WCDL";
    } else {
        correctLab = $("#LabName").val();
    }
    let val = '';
    if ($("#doctorId").val() !== "" && typeof $('#doctorId').val() !== 'undefined') {
        val = $("#doctorId").val();
    } else {
        val = '0';
    }
    let formDataED = {
        labName: correctLab,
        docId: val
    };
    let url = contextpath + "form/endpoints/ed/" + formDataED.labName + "/" + formDataED.docId;

    $.getJSON(url,
        function (data) {

            DisplayEDoc(data);
        });
}


function DisplayECust(data){

    console.log(data);
    document.getElementById("address1").value = data.address1;
    if (!data.hasOwnProperty('address2')) {
        document.getElementById("address2").value = '';
    } else {
        document.getElementById("address2").value = data.address2;
    }
    document.getElementById("city").value = data.city;
    document.getElementById("state").value = data.state;
    document.getElementById("zip").value = data.zipCode;
    document.getElementById("pName").value = data.practiceName;
    document.getElementById("phone").value = data.officePhone;
    if (!data.hasOwnProperty('dentalGroup')) {
        document.getElementById("dGroup").value = '';
    } else {
        document.getElementById("dGroup").value = data.dentalGroup;
    }

    if(data.warning == "no Customer") {
        document.getElementById("mode").value = 0;
        document.getElementById("customerId").value = "";
        ChangeDisplay(0);
    }

}


function ECust(){
    let customerID = "";
    if ($("#LabName").val() == 'PAIRW-ADL' || $("#LabName").val() == 'PAIRW-IDA') {
        correctLab = "PAIRW";
    } else if ($("#LabName").val() == 'TXCON' || $("#LabName").val() == 'CAHAW' || $("#LabName").val() == 'CAHAO' || $("#LabName").val() == 'CAHER' || $("#LabName").val() == 'CAELS' || $("#LabName").val() == 'NVLAS' || $("#LabName").val() == 'NYWHI') {
        correctLab = "WCDL";
    } else {
        correctLab = $("#LabName").val();
    }
    if ($("#customerId").val() !== "" && typeof $('#customerId').val() !== 'undefined') {
        customerID = $("#customerId").val();
    } else {
        customerID = '0';
    }

    let formDataED = {
        labName: correctLab,
        custId: customerID
    };
    let url = contextpath + "form/endpoints/ec/"+formDataED.labName+"/"+formDataED.custId;

    $.getJSON(url,
        function (data) {

            DisplayECust(data);
        });
}



function ChangeDisplay(mode){

    if(mode == 1) {
        $('#hiddenRow').show();
        $('#doctorId').show();
        $('#doctorId1').show();
        $('#doctorId2').show();

        $('#customerId').hide();
        document.getElementById('customerId').value = '';

        $('#customerId1').hide();
        $('#customerId2').hide();
    } else if (mode == 2) {

        $('#hiddenRow').show();
        $('#customerId').show();

        $('#customerId1').show();
        $('#customerId2').show();

        $('#doctorId').hide();
        document.getElementById('doctorId').value = '';

        $('#doctorId1').hide();
        $('#doctorId2').hide();


    } else {
        $('#hiddenRow2').hide();
        $('#hiddenRow').hide();
        $('#doctorId').hide();
        document.getElementById('doctorId').value = '';

        $('#customerId').hide();
        document.getElementById('customerId').value = '';

        $('#doctorId1').hide();
        $('#customerId1').hide();

        $('#doctorId2').hide();
        $('#customerId2').hide();


    }

    if($("#LabName").val() == "ARHBR"){
        $('#dhs').show();
        $('#dhs').show();
        $('#dhs1').show();
        $('#dhs2').show();
    } else {
        $('#dhs').hide();
        $('#dhs1').hide();
        $('#dhs2').hide();
    }

}

function ValidateLicenseState(){
    let num = $('#licenseNo').val();
    // console.log(num);
    let good = false;
    let currentState;
    for (let i = 0; i < States.length; i++) {
        let end = "/"+States[i];
        if (num.endsWith(end)){
            good = true;

            currentState = States[i];
        } else {
            // console.log("bad does not end with", end);
        }
    }

    if (!good){
        document.getElementById("licenseNo").value = "";
        document.getElementById("licenseNoError").style.color = "red";
        document.getElementById("licenseNoError").innerHTML = "The license must be followed by a '/' and then the state abbreviation";
        document.getElementById("goodLicense").innerHTML = "&#10060"
    } else {
        document.getElementById("licenseNoError").innerHTML = "";
        document.getElementById("goodLicense").innerHTML = "&#9989"
        document.getElementById("licenseNoError").style.color = "black";
        let msgString = "You can verify the license  <a href=" + StateWebsites[currentState] +" target=\"_blank\">here</a>"
        document.getElementById("licenseNoError").innerHTML = msgString;
    }
}

function NPICheck() {
    let url = "https://npiregistry.cms.hhs.gov/api/?number=";
    // Search by Name
    // https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=NPI-1&taxonomy_description=Dentist&first_name=Nathan&use_first_name_alias=&last_name=ABRAMSON&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1
    let npi = "";
    let fname = "";
    let lname = "";
    if($('#npi').val() != "" && typeof $('#npi').val() !== 'undefined' ){
        npi = $('#npi').val();
        url = url + $('#npi').val() + "&enumeration_type=NPI-1&taxonomy_description=Dentist&first_name=";
    } else {
        url = url +"&enumeration_type=NPI-1&taxonomy_description=Dentist&first_name=";
    }
    if($('#fName').val() != "" && typeof $('#fName').val() !== 'undefined' ){
        fname = $('#fName').val();
        lname = $('#lName').val();
        url = url + $('#fName').val() + "&use_first_name_alias=&last_name="+$('#lName').val()+"&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1";
    } else {
        lname = $('#lName').val();
        url = url + "&use_first_name_alias=&last_name="+$('#lName').val()+"&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1";
    }

    console.log(url);



}



function ProcessNPI(info){
    console.log("made it this far");
    console.log(info);
}

function CheckSDoc(){
    let enoughData = false;
    let url = contextpath + "form/endpoints/sd/"
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let license = $('#licenseNo').val();
    if ($("#LabName").val() == 'PAIRW-ADL' || $("#LabName").val() == 'PAIRW-IDA'){
        correctLab = "PAIRW";
    } else if ($("#LabName").val() == 'TXCON' || $("#LabName").val() == 'CAHAW' || $("#LabName").val() == 'CAHAO' || $("#LabName").val() == 'CAHER' || $("#LabName").val() == 'CAELS' || $("#LabName").val() == 'NVLAS' || $("#LabName").val() == 'NYWHI' ) {
        correctLab = "WCDL";
    } else {
        correctLab = $("#LabName").val();
    }
    console.log(correctLab);
    let formDataSD = {
        labName: correctLab,
        fName: firstName,
        lName: lastName,
        licenseNo: license
    };
    // for (const formDataSDKey in formDataSD) {
    //     console.log(formDataSD[formDataSDKey]);
    // }
    if($('#licenseNo').val() !== ""){
        console.log("good license");
        url += formDataSD.labName + "/" + formDataSD.fName  + "/" + formDataSD.lName + "/" + formDataSD.licenseNo
    }
    else {
        url += formDataSD.labName + "/" + formDataSD.fName  + "/" + formDataSD.lName
    }

    if($('#fName').val() !== "" && $('#lName').val() !== "" ){
        enoughData = true;
    }
    if(enoughData){
        $.getJSON(url,
            function (data) {

                DisplaySDoc(data);
            });
    }

}

function DisplaySDoc(info){
    $('.cards').remove();
    console.log(info);
    let data;
    let text = "";
    for (let i = 0; i < info.length; i++) {
        data = info[i];
        text += "<button class='cards'>DoctorID: "+data.doctorNumber+" "+" <br>Dr First Name: " +data.firstName+ " <br>Dr Last Name: "+data.lastName +" <br>License Number: "+ data.licenseNumber+ " <br>NPI Number: "+data.npinumber + " <br>On Customer: "+data.customerID + " <br>Warning: "+data.warning+"</button>"

    }
    document.getElementById("similarChoice").innerHTML = text;
}

function CheckSCust(){
    // {labName}/{add1}
    // {labName}/{add1}/{phone}
    let enoughDataCust = false;
    let add1 = $('#address1').val();
    let phone = $('#phone').val();
    if ($("#LabName").val() == 'PAIRW-ADL' || $("#LabName").val() == 'PAIRW-IDA'){
        correctLab = "PAIRW";
    } else if ($("#LabName").val() == 'TXCON' || $("#LabName").val() == 'CAHAW' || $("#LabName").val() == 'CAHAO' || $("#LabName").val() == 'CAHER' || $("#LabName").val() == 'CAELS' || $("#LabName").val() == 'NVLAS' || $("#LabName").val() == 'NYWHI' ) {
        correctLab = "WCDL";
    } else {
        correctLab = $("#LabName").val();
    }
    console.log(correctLab);
    let formDataSC = {
        labName: correctLab,
        address: add1,
        phone: phone
    };
    let url = contextpath + "form/endpoints/sc/" + formDataSC.labName + "/"

    if($('#phone').val() !== ""){

        url += formDataSC.address  + "/" + formDataSC.phone
    }
    else {
        url += formDataSC.address
    }

    if($('#address1').val() !== "" ){
        enoughDataCust = true;
    }
    if(enoughDataCust){
        $.getJSON(url,
            function (data) {

                DisplaySCust(data);
            });
    }

}

function DisplaySCust(info){
    $('.cards').remove();
    console.log(info);
    let data;
    let text = "";
    for (let i = 0; i < info.length; i++) {
        data = info[i];
        text += "<button class='cards'>CustomerID: "+data.customerID+" "+" <br>Practice Name: " +data.practiceName+ " <br>Dental Group: "+data.dentalGroup +" <br>Address: "+ data.address1+", "+data.city+", " + data.state + ", "+ data.zipCode+ " <br>Office Phone: "+data.officePhone + " <br>Warning: "+data.warning+"</button>"

    }
    document.getElementById("similarChoice").innerHTML = text;
}

function CheckPhone(){
    let phone = $('#phone').val();
    if(phone.length > 12){
        document.getElementById("phone").value = "";
    }
    if(phone.length == 10){
        let res = phone.slice(0,3) + "-" + phone.slice(3,6)+"-"+phone.slice(6,10);
        document.getElementById("phone").value = res;
    }
}

function ChooseSDisplay(info){
    let text = info.innerHTML
    console.log(text);
    if (text.indexOf("<br>Practice Name:") == -1){

        let len = text.indexOf("<br>Dr First Name:");

        let docID = text.slice(10, len - 2)
        console.log(docID);
        document.getElementById("doctorId").value = docID;
        document.getElementById("mode").value = 1
        EDoc();
        ChangeDisplay(1);

    } else {
        let len = text.indexOf("<br>Practice Name:");

        let custID = text.slice(11, len - 2)
        console.log(custID);
        document.getElementById("customerId").value = custID;
        document.getElementById("mode").value = 2
        ECust();
        ChangeDisplay(2);
    }
}

function addStates() {
    let data;
    let text = "";
    for (let i = 0; i < States.length; i++) {
        data = States[i];
        text += "<option class='p-2' value='" + data + "'>" + data + "</option>"
    }

    document.getElementById("state").innerHTML = text;


}

$(document).ready(function () {
    ChangeDisplay($("#mode").val());
    addStates();

    $('#mode').change(function (event) {
        event.preventDefault();
        ChangeDisplay($("#mode").val());
    });

    $('#LabName').change(function(event) {
        event.preventDefault();
        ChangeDisplay($("#mode").val());
    });

    $('#doctorId').change(function(event) {
        event.preventDefault();

        EDoc();
    });

    $('#customerId').change(function(event) {
        event.preventDefault();

        ECust();
    });

    $('#licenseNo').change(function(event) {
        event.preventDefault();

        ValidateLicenseState();
        if($('#mode').val() == 0  || $('#mode').val() == 2){
            CheckSDoc();
        }
    });

    $('#npi').change(function(event) {
        event.preventDefault();
        NPICheck();

    });

    $('#lName').change(function(event) {
        event.preventDefault();

        if($('#mode').val() == 0  || $('#mode').val() == 2){
            CheckSDoc();
        }
    });

    $('#fName').change(function(event) {
        event.preventDefault();

        if($('#mode').val() == 0  || $('#mode').val() == 2){
            CheckSDoc();
        }

    });

    $('#address1').change(function(event) {
        event.preventDefault();

        if($('#mode').val() == 0  || $('#mode').val() == 1){
            CheckSCust();
        }
    });

    $('#phone').change(function(event) {
        event.preventDefault();

        CheckPhone();
        if($('#mode').val() == 0  || $('#mode').val() == 1){
            CheckSCust();
        }
    });

    $('#similarChoice').on(
        'click','.cards',function(e) {
            ChooseSDisplay(this);
    });


});