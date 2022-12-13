import { COMPANY_NAME, SERVICE_NAME, SERVICE_VERSION } from 'constant/company';

const globalHTML = `
<style>
	button{
		padding: 12px 24px;
		border: 1px solid #333;
		border-radius: 8px;
		outline: none;
		background: transparent;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}
</style>
<h1>${COMPANY_NAME}</h1>
<p>${SERVICE_NAME} | ${SERVICE_VERSION}</p>
<div>
    <button onclick="goSwagger()">Swagger</button>
    <button style="margin-left: 12px;" onclick="goAdminJS()">AdminJS</button>
</div>
<script>
function handlePath(path){
    window.location.href = window.location.protocol + "//" + window.location.host + path;    
}

function goSwagger(){
    console.log('goSwagger');
    handlePath('/api-docs');
}

function goAdminJS(){
    console.log('goAdminJS');
    handlePath('/adminjs');
}
</script>
`;

export default globalHTML;
