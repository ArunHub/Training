import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import './A.component.css';
import CC from './CC/C.component';
import DD from './DD/D.component';
import EE from './CC/EE/E.component';


class AA extends Component {

    constructor(props) {
        console.log('MMMMMMMMMMMMMMMMMMM(AA): ', props);
        super(props);

        this.state = {
            stateVal : ""
        }    

        this.xx = 123;
    }
    
    testVar = 'Hello ATT';
    testobj = {
        aa: {
            bb: {
                cc:123,
                dd:777,
                ss: 'ppp',
            }
        }
    }

    testMethod = (val) => {
        this.setState(
            {
                stateVal: val
            }
        )
    }

    getStackTrace() {
        var obj = {};
        Error.captureStackTrace(obj, this.getStackTrace);
        return obj.stack;
    };

    rrrr () {
        
    }
    test() {
        console.log('BBBBBBBBBB');
    }

    //CC = require('./CC/C.component').CC;
    render() {


        console.log('Rendering AAabcdefghijklz: ', this.props);
        //console.log(this.getStackTrace());
        let a = 10;
        let kk = {a:123};
        let b=12;
        let ghgh =      <div style={{"width":"118px"}}  className="alert-danger" mm="557775" >
                    <div _pbidd="123" >hhhhhhhhhhhhhhhh[{this.props?this.props.bbb:null}]kkzzkkkkkkkk</div>
                    hifxd - {kk.a}<div/>
                    </div>;
        return                    (



            
            
            <div  className="parent">
            <select>
                {
                    [121,225,33].map((t,i)=>{return <option key={i} >{t}</option>})
                }
                                
            </select>
            <textarea style={{"width":"407px","height":"36px","minWidth":"6px"}} ></textarea><textarea className=""  style={{"width":"197px","height":"86px","minWidth":"6px"}} ></textarea><select><option></option><option></option><option></option></select><textarea className="alert-warning"  style={{"width":"197px","height":"36px","minWidth":"6px","margin":"10px"}} ></textarea><textarea className="      "  style={{"width":"282px","height":"36px","minWidth":"6px","margin":"10px"}} ></textarea>
         
{
    <div>
    {
        (true)
        ?
        <div className="     col-xs-2 col-xs-12 alert-danger"  style={{"height":"170px","width":"391px"}}>{[11,22].map((t,i)=><div key={i}>{t}{[1111,22].map((t,i)=><div className="alert-primary"  style={{"margin":"25px"}}  key={i}>{t}</div>)}</div>)}true<br/>{(true)?<div>true</div>:<div className=""  style={{"width":"82px","height":"43px"}} >false</div>}</div>
        :
        <div>false<div>abcddd</div></div>
    }
    </div>
}

                {/* <Button id="adc" onClick={this.test.bind(this)}>Rendering AAabcdefghzabcdefgikm<a href="about:blank"></a></Button> */}
                <span className="alert-danger" >ssGHssSSxSSsskkkZ12301234Z
ZZjjggkk<span></span><input type="range"/></span><span style={{"backgroundColor":""}}  className="  alert-warning" >darling</span>
                {
                    a===b?  <div >ifpart</div>:
                <div >elsepart</div>
                }
                {
                    <div id="abcd" className="new-class"/>
                }
                {ghgh}
                <CC style={{margin:"72px"}}  passedVal={this.testVar}></CC>
                <DD testMethod={this.testMethod}>
                    <EE></EE>
                </DD>    
                {
                    document.xx==null?<div>TTTTfddd</div>:<div>FFFFF</div>
                }            
                <EE></EE>
                <EE></EE>
            </div>
        );
    }
}

export default AA;
