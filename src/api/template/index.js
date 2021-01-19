import request from "@/api/request";


function templateSave(data) {
    return request({
        url: "/api/admin/adgoods/",
        method: "post",
        data
    });
}

function templateDelete(data) {
    return request({
        url: "/api/admin/adupgoods/",
        method: "get",
        data
    });
}


export default {
    templateSave,
    templateDelete,
};
