var getURL = function getURL(parm){
            var Pageurl = window.location.search.substring(1),
            URLVariables = Pageurl.split('&'),
                ParameterName, i;
            
        for(i=0; i<URLVariables.length;i++){
            ParameterName = URLVariables[i].split('=');
            
            if(ParameterName[0] == parm){
                return ParameterName[1]==undefined ? true : decodeURIComponent(ParameterName[1]);
            }
        }
    }
var Id=getURL('Id');
//console.log(Id);

function FillDetails(){
				$.ajax	({
				url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
				type: 'GET',
				dataType: 'json', 
				success: function(EmpDetail){ 
				console.log(EmpDetail);
									document.getElementById("Employee Id").value=EmpDetail.Id;
									document.getElementById("First Name").value=EmpDetail.firstname;
									document.getElementById("Last Name").value=EmpDetail.lastname;
									document.getElementById("Father Name").value=EmpDetail.fathername;
									document.getElementById("Email").value=EmpDetail.Email;
									document.getElementById("Phone Number").value=EmpDetail.Phone;
									document.getElementById("Country").value=EmpDetail.country;
									document.getElementById("Dob").value=EmpDetail.dob;
									document.getElementById("Gender").value=EmpDetail.gender;
									document.getElementById("Designation").value=EmpDetail.designation;
									document.getElementById("Address").value=EmpDetail.address;
									document.getElementById("Graduationdegree").value=EmpDetail.EducationDetail.GraduationDegree;
									document.getElementById("Graduationpercentage").value=EmpDetail.EducationDetail.GraduationMarks;
									document.getElementById("Twelfthboard").value=EmpDetail.EducationDetail.Twelfthboard;
									document.getElementById("Twelfthpercentage").value=EmpDetail.EducationDetail.Twelfthmarks;
									document.getElementById("Tenthboard").value=EmpDetail.EducationDetail.TenthBoard;
									document.getElementById("Tenthpercentage").value=EmpDetail.EducationDetail.Tenthmarks;
										}
						});
}

function UpdateDetails(){
	var employeeid = document.getElementById("Employee Id").value;
	var empid=employeeid.valueOf();
	var firstname = document.getElementById("First Name").value;
	var fname=firstname.valueOf();
	var lastname = document.getElementById("Last Name").value;
	var lname=lastname.valueOf();
	var fathername = document.getElementById("Father Name").value;
	var fathersname=fathername.valueOf();
	var email = document.getElementById("Email").value;
	var mail=email.valueOf();
	var phone = document.getElementById("Phone Number").value;
	var mobile=phone.valueOf();
	var graddegree = document.getElementById("Graduationdegree").value;
	var degree=graddegree.valueOf();
	var gradmarks = document.getElementById("Graduationpercentage").value;
	var twelfthboard = document.getElementById("Twelfthboard").value;
	var board12=twelfthboard.valueOf();
	var twelfthmarks = document.getElementById("Twelfthpercentage").value;
	var tenthboard = document.getElementById("Tenthboard").value;
	var board10=tenthboard.valueOf();
	var tenthmarks = document.getElementById("Tenthpercentage").value;
	var country = document.getElementById("Country").value;
	var region=country.valueOf();
	var dob = document.getElementById("Dob").value;
	var gender = document.getElementById("Gender").value;
	var sex=gender.valueOf();
	var designation = document.getElementById("Designation").value;
	var profile=designation.valueOf();
	var address = document.getElementById("Address").value;
	
			var datafor_EmployeeDetail={
								"EducationDetail": {
								"Id": empid,
								"TenthBoard": board10,
								"Tenthmarks": tenthmarks,
								"Twelfthboard": board12,
								"Twelfthmarks": twelfthmarks,
								"GraduationDegree": degree,
								"GraduationMarks": gradmarks,
									
								},
								"Id": empid,
								"firstname":fname,
								"lastname":lname,
								"fathername": fathersname,
								"Email":mail,
								"Phone": mobile,
								"country":region,
								"dob":dob, 
								"gender": sex,
								"designation": profile,
								"address": address,
								};
						$.ajax({
							url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
							data: datafor_EmployeeDetail,
							type: 'PUT',
							dataType: 'json', 
							success: function(response){ 
													alert("Changes have been updated as per your request");
													window.location="user list.html"
													}	
								});
}

/*
function DeleteUser(){
		alert("Are you sure, You want to delete the user data from database.");
		$.ajax({
		url: 'http://localhost:50052/api/EmployeeDetail/'+Id,
        type: 'DELETE',
        dataType: 'json',
        success: function(deleted)
								{
								window.location.href = "user list.html";
								}
        });
}
*/

/*Extra Create User code

function createuser(){
	var firstname = document.getElementById("First Name").value;
	var lastname = document.getElementById("Last Name").value;
	var Email = document.getElementById("Email").value;
	var pass = document.getElementById("Password").value;
	var repass = document.getElementById("Repassword").value;
	var country = document.getElementById("Country").value;
	var employeeid = document.getElementById("Employee Id").value;
	var dob = document.getElementById("DOB").value;
	var terms = document.getElementById("licence").value;
	var firstname = document.getElementById("First Name").value;
	var lastname = document.getElementById("Last Name").value;
	var Email = document.getElementById("Email").value;
	var pass = document.getElementById("Password").value;
	var repass = document.getElementById("Repassword").value;
	var country = document.getElementById("Country").value;
	var employeeid = document.getElementById("Employee Id").value;
	var dob = document.getElementById("DOB").value;
	var terms = document.getElementById("licence").value;
if(pass == repass && terms == 1 ){
	var datafor_EmployeeDetail ={
								"Id": employeeid,
								"firstname":firstname,
								"lastname":lastname,
								"fathername": "Not Specified",
								"Email":Email,
								"Phone": "Not Specified",
								"country":Country,
								"dob":dob, 
								"gender": "Not Specified",
								"designation": "Not Specified",
								"address":"Not Specified",
								};
	var datafor_EducationDetail={
								"Id": employeeid,
								"Email": Email,
								"password": pass,
								"Terms": terms,
								};
				$.ajax	({
					url: "http://localhost:50052/api/EmployeeDetail",
					data: datafor_EmployeeDetail,
					type: 'post',
					dataType: 'json', 
					success: function(res)	{ 
										$.ajax({
											url: "http://localhost:50052/api/AuthenticateUser",
											data: datafor_AuthenticateUser,
											type: 'post',
											dataType: 'json', 
											success: function(response){window.location.href = "index.html";}  
												});	
											}
						});
		}else{alert("Password doesn't match");
			window.location.href = "Signup.html";}
};

*/

	