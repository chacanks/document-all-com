import React, { Component } from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


  
const styles = {
    propContainer: {
      width: 200,
      overflow: 'hidden',
      margin: '20px auto 0',
    },
    propToggleHeader: {
      margin: '20px auto 10px',
    },
    levelCellRed : {
        backgroundColor : '#999'
    },
    levelCellGray : {
        backgroundColor : '#ccc'
    }

  };
  
  const tableData = [
    {
      name: 'John Smith',
      status: 'Employed',
    },
    {
      name: 'Randal White',
      status: 'Unemployed',
    },
    {
      name: 'Stephanie Sanders',
      status: 'Employed',
    },
    {
      name: 'Steve Brown',
      status: 'Employed',
    },
    {
      name: 'Joyce Whitten',
      status: 'Employed',
    },
    {
      name: 'Samuel Roberts',
      status: 'Employed',
    },
    {
      name: 'Adam Moore',
      status: 'Employed',
    },
  ];


  var reqListData = [
        {no : 1, reqId : 'id_01', reqName : 'name_01', level : 1, state : 'A', pageNo : '01'}
      , {no : 2, reqId : 'id_02', reqName : 'name_02', level : 1, state : 'A', pageNo : '02'}
      , {no : 3, reqId : 'id_03', reqName : 'name_03', level : 3, state : 'A', pageNo : '03'}
      , {no : 4, reqId : 'id_04', reqName : 'name_04', level : 1, state : 'A', pageNo : '04'}
      , {no : 5, reqId : 'id_05', reqName : 'name_05', level : 1, state : 'B', pageNo : '05'}
      , {no : 6, reqId : 'id_06', reqName : 'name_06', level : 3, state : 'A', pageNo : '06'}
      , {no : 7, reqId : 'id_07', reqName : 'name_07', level : 1, state : 'A', pageNo : '07'}
      , {no : 8, reqId : 'id_08', reqName : 'name_08', level : 1, state : 'C', pageNo : '08'}
      , {no : 9, reqId : 'id_09', reqName : 'name_09', level : 1, state : 'B', pageNo : '09'}
      , {no : 10, reqId : 'id_10', reqName : 'name_10', level :2, state : 'A', pageNo : '10'}
      , {no : 11, reqId : 'id_11', reqName : 'name_11', level : 1, state : 'A', pageNo : '11'}
      , {no : 12, reqId : 'id_12', reqName : 'name_12', level : 1, state : 'A', pageNo : '12'}
      , {no : 13, reqId : 'id_13', reqName : 'name_13', level : 1, state : 'C', pageNo : '13'}
      , {no : 14, reqId : 'id_14', reqName : 'name_14', level : 1, state : 'A', pageNo : '14'}
      , {no : 15, reqId : 'id_15', reqName : 'name_15', level : 1, state : 'B', pageNo : '15'}
      , {no : 16, reqId : 'id_16', reqName : 'name_16', level : 2, state : 'A', pageNo : '16'}
      , {no : 17, reqId : 'id_17', reqName : 'name_17', level : 1, state : 'B', pageNo : '17'}
      , {no : 18, reqId : 'id_18', reqName : 'name_18', level : 1, state : 'A', pageNo : '18'}
      , {no : 19, reqId : 'id_19', reqName : 'name_19', level : 2, state : 'A', pageNo : '19'}
  ];



class ReqListLayout extends Component {
    state = {
        fixedHeader: true,  /**스크롤시 헤더 고정여부 */
        fixedFooter: false, /**푸터 고정여부 */
        stripedRows: false, /**짝수행 색상표시여부 */
        showRowHover: true, /**마우스 오버시 색상표시여부 */
        selectable: true,   /**표 체크박스 가능여부 */
        multiSelectable: false, /**표 체크박스 다중선택여부 */
        enableSelectAll: false, /**표 체크박스 전체선택여부(multiSelectable=true 일경우) */
        deselectOnClickaway: false, /**행 선택 후 포커스 없어지면 선택 취소할지 여부 */
        showCheckboxes: true,   /**체크박스 선택표기여부 */
        height: '500px',
      };
    
      handleToggle = (event, toggled) => {
        this.setState({
          [event.target.name]: toggled,
        });
      };
    
      handleChange = (event) => {
        this.setState({height: event.target.value});
      };
    
      

      render() {

        /**
         * 중요도 엘리멘트 설정
         * @param {*중요도} level 
         */
        const levelElement = (level) => {
        
            if( level === 1 ){
                return <TableRowColumn>-</TableRowColumn>
            }else if( level === 2 ){
                return (<TableRowColumn style={styles.levelCellGray}>중요</TableRowColumn>)
            }else if( level === 3 ){
                return (<TableRowColumn style={styles.levelCellRed}>완전중요</TableRowColumn>)
            }
        };

        const stateElement = (state)=>{
            switch(state){
                case '' : break;
            }
        };

        return (
          <div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'center'}}>
                    요구사항 관리 목록
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="NO">NO</TableHeaderColumn>
                  <TableHeaderColumn tooltip="요구사항 ID">요구사항 ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="요구사항 명">요구사항 명</TableHeaderColumn>
                  <TableHeaderColumn tooltip="중요도">중요도</TableHeaderColumn>
                  <TableHeaderColumn tooltip="상태">상태</TableHeaderColumn>
                  <TableHeaderColumn tooltip="PageNo">PageNo</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {reqListData.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.no}</TableRowColumn>
                    <TableRowColumn>{row.reqId}</TableRowColumn>
                    <TableRowColumn>{row.reqName}</TableRowColumn>
                    () =>{levelElement(row.level)}                    
                    <TableRowColumn>{row.state}</TableRowColumn>
                    <TableRowColumn>{row.pageNo}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>    
          </div>
        );
      }
}

export default ReqListLayout;    