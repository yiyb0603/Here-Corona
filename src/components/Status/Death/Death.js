import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./Death.scss";

const columns = [
  { id: "number", label: "환자번호", minWidth: 80, align: "left" },
  {
    id: "age",
    label: "출생년도",
    minWidth: 80,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "gender",
    label: "성별",
    minWidth: 80,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "date",
    label: "사망일",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  },
  {
    id: "path",
    label: "감염 경로",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  },
  {
    id: "etc",
    label: "비고",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  }
];

function createData(number, age, gender, date, path, etc) {
  return { number, age, gender, date, path, etc };
}

//환자번호	출생년도	성별	사망일	감염 경로	비고
const rows = [
  createData("#", "1933(86)", "여", "03.01", "", ""),
  createData(
    "#",
    "1956(64)",
    "남",
    "03.01",
    "",
    "26일 확진 이후 영남대병원에서 사망. 기저질환을 갖고 있던 것으로 알려짐."
  ),
  createData(
    "#",
    "1955(65)",
    "남",
    "03.01",
    "",
    "26일 확진 이후 영남대병원에 입원해 치료를 받다 중환자실에서 사망."
  ),
  createData(
    "#",
    "1949(71)",
    "남",
    "03.01",
    "",
    "지난달 25일 확진 판정을 받고 대구경북대병원 음압병실에서 치료받다가 사망."
  ),
  createData(
    "#",
    "1943(77)",
    "여",
    "03.01",
    "",
    "입원 대기 중 숨진 4번째 환자. 대구 수성구 가정집에서 숨진 것을 경찰이 확인해 수성보건소에 통보.(기저질환: 기관지염)"
  ),
  createData(
    "#",
    "1943(77)",
    "여",
    "03.01",
    "",
    "2월 29일 파티마병원에 입원해 치료를 받던 중 사망. 대구에서는 12번째.(기저질환: 암, 고혈압, 당뇨)"
  ),
  createData(
    "# 2946",
    "1934(86)",
    "여",
    "03.01",
    "",
    "대구가톨릭대병원 응급실에서 입원 대기 중 사망.(기저질환: 고혈압, 당뇨)"
  ),
  createData(
    "# 2579",
    "1940(80)",
    "남",
    "03.01",
    "",
    "칠곡경북대학교병원에서 입원 중 사망.(기저질환: 고혈압)"
  ),
  createData(
    "# ",
    "1937(83)",
    "남",
    "03.01",
    "",
    "2월 27일 선별진료소에서 검사를 받고 다음날 확진판정을 받자마자 경북대병원 음압병상에 입원해 치료를 받다가 사망.(기저질환: 뇌경색, 고혈압, 당뇨)"
  ),
  createData(
    "# ",
    "1943(77)",
    "남",
    "02.29",
    "",
    "23일 칠곡경북대병원에 입원해 25일 새벽에 확진 판정. 음압병상에서 치료하던 확진자 29일 사망.(기저질환: 치매, 파킨슨병)"
  ),
  createData(
    "# 2570",
    "1957(63)",
    "여",
    "02.27",
    "",
    "27일 영남대병원에서 숨져 코로나19 진단 검사 결과 양성 판정.(기저질환: 암)"
  ),

  createData(
    "# 1875",
    "1926(94)",
    "여",
    "02.28",
    "",
    "요양원에 장기간 입원 중이었던 환자로 23일 확정 판정을 받고 입원 중 사망.(기저질환: 심장질환)"
  ),
  createData(
    "# 2467",
    "1950(70)",
    "여",
    "02.28",
    "",
    "대구에서 자가격리 중 가톨릭병원 응급실로 긴급이송 됐으나 사망(자가격리 중 숨진 2번째 사례).(기저질환: 고협압, 당뇨)"
  ),
  createData(
    "# 1443",
    "1945(75)",
    "남",
    "02.27",
    "신천지대구교회",
    "대구지역의 병상 부족으로 집에서 격리생활을 하다 영남대병원으로 긴급 이송됐지만 사망. 과거 기저질환이 있었음.(신장이식을 받은 이력)"
  ),
  createData(
    "# 114",
    "1946(74)",
    "남",
    "02.26",
    "신천지대구교회",
    "선별진료소를 통해 대구의료원에 입원했다가 패혈성 쇼크로 사망.(기저질환: 만성간질환)"
  ),
  createData(
    "# 875",
    "1984(36)",
    "남",
    "02.25",
    "",
    "몽골인 남성으로 간 이식 수술을 받으러 입국해 치료를 받다가 사망(외국인 첫 사례).(기저질환: 만성간질환)"
  ),
  createData(
    "# 298",
    "1962(58)",
    "남",
    "02.25",
    "청도대남병원",
    "청도대남병원 관련 일곱 번째 사망 사례. 폐렴이 악화되어 사망.(기저질환: 정신질환)"
  ),
  createData(
    "# 925",
    "1951(69)",
    "여",
    "02.24",
    "신천지대구교회",
    "복부 팽만 증상으로 칠곡 경북대병원을 통해 입원하여 치료 중 급성 호흡 부전으로 사망. 사망 후 양성 판정. 신천지대구교회와 관련된 것으로 확인. (기저질환: 고협압, 당뇨)"
  ),
  createData(
    "# 107",
    "1953(67)",
    "남",
    "02.24",
    "",
    "청도대남병원 관련 사례.(기저질환: 정신질환)"
  ),
  createData(
    "# 286",
    "1958(62)",
    "남",
    "02.23",
    "",
    "청도대남병원 관련 사례.(기저질환: 정신질환)"
  ),
  createData(
    "# 55",
    "1961(59)",
    "남",
    "02.23",
    "",
    "경북 청도대남병원에 입원해 있던 환자. 동국대 경주병원으로 이송돼 입원 치료 중 저녁에 사망.(기저질환: 정신질환)"
  ),
  createData(
    "# 38",
    "1963(57)",
    "여",
    "02.23",
    "",
    "기저질환이 있었고, 입원 중 에크모 사용. 경북대병원에서 사망.(기저질환: 만성신질환)"
  ),
  createData(
    "# 54",
    "1963(57)",
    "남",
    "02.23",
    "",
    "경북 청도대남병원에서 입원해 있었으며, 폐렴이 악화돼 사망.(기저질환: 정신질환)"
  ),
  createData(
    "# 443",
    "1979(41)",
    "남",
    "02.21",
    "",
    "경주 경북에서 확진 판정 이후 자택에서 사망.(기저질환: 정신질환)"
  ),
  createData(
    "",
    "1965(55)",
    "여",
    "02.21",
    "청도대남병원",
    "경북 청도대남병원에서 확진판정을 받고 부산대병원 이송 중 사망."
  ),
  createData(
    "",
    "1957(63)",
    "남",
    "02.19",
    "청도대남병원",
    "경북 청도대남병원에 정신질환으로 입원 중 19일 새벽 폐렴이 악화돼 사망.(기저질환: 정신질환)"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 600
  }
});

const Death = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root} id="table1">
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Death;
