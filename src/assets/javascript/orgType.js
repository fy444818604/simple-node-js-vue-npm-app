
// 是否教育厅
export function isBoss(unitAttr) {
    return unitAttr === 1;
}

// 是否市州教育局
export function isCity(unitAttr) {
    return unitAttr === 2;
}

// 是否区/县教育局
export function isArea(unitAttr) {
    return unitAttr === 4;
}

// 是否学校
export function isSchool(unitAttr) {
    return unitAttr === 8;
}

// 是否校区
export function isSchoolArea(unitAttr) {
    return unitAttr === 16;
}

// 是否部门
export function isDepartment(unitAttr) {
    return unitAttr === 32;
}

// 是否小组
export function isGroup(unitAttr) {
    return unitAttr === 64;
}

// 是否主要的机构。即：教育厅、市州教育局、区/县教育局、学校中的一种
export function isOrg(unitAttr) {
    return isBoss(unitAttr) || isCity(unitAttr) || isArea(unitAttr) || isSchool(unitAttr);
}