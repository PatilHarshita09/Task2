import  {countries ,states,types,products,colors,packingtypes, packingquant, deliverymode} from "./names" ;
import React from 'react';

function Forms_structure(){

    return(
        <div>
            <h4>Fill out below inqury-form and get Quotation on Email, * Fields are mandatory</h4>
            <br/><hr/>
            <form>
            {/* company information */}
            <div className="form-group"><h2>Company Information</h2>
            <label for="c-name" ><strong>Name of Company*</strong></label>
            <input type="text" id="c-name" placeholder="Company Name" ></input><br/><br/>

            <label for="c-address" ><strong>Company Address*</strong></label>
            <textarea  id="c-address" placeholder="Address of Company" ></textarea><br/><br/>
                                                                                                                                                                                                                                
            <label for="c-country" ><strong>Country*</strong></label>
            <select id="c-country" name="c-country"  >
            {countries.map((country, index) => (
            <option key={index} value={country} selected={country === 'India'} >{country}</option>
            ))}
            </select><br/><br/>
            
            <label for="c-state" ><strong>State*</strong></label>
            <select id="c-state" name="c-state">
            {states.map((state,index)=>(
             <option  key={index} value={state} selected={states === 'Select State'} >{state}</option>
            ))}
            </select>

            <span>
            <label for="c-city" style={{marginLeft:'50px'}}><strong>City/Village*</strong></label>
            <input type="text" id="c-city" placeholder="City/Village" ></input>
            </span><br/><br/>
    
            <label for="c-pin" ><strong>Pin code or Zip code</strong></label>
            <input type="text" id="c-pin" placeholder="Pincode or Zipcode" ></input>
            </div><br/><br/>

            {/* contact */}
            <div className="form-group"><h2>Contact</h2>
            <label for="cp-name"><strong>Contact Person*</strong></label>
            <input type="text" id="cp-name" placeholder="Contact Person Name" ></input><br/><br/>

            <label for="cp-des"><strong>Designation*</strong></label>
            <input type="text" id="cp-des" placeholder="Designation" ></input>

            <span>
            <label for="cp-dep*" style={{marginLeft:'50px'}}><strong>Department*</strong></label>
            <input type="text" id="cp-dep" placeholder="Department" ></input><br/><br/>
            </span>

            <label for="cp-e*"><strong>Email*</strong></label>
            <input type="text" id="cp-e" placeholder="abc@gmail.com" ></input><br/><br/>
             
            <label for="cp-cno*"><strong>Contact Number*</strong></label>
            <input type="text" id="cp-cno" placeholder="9898595956" ></input>

            <span>
            <label for="cp-wno*" style={{marginLeft:'50px'}}><strong>WhatsApp Number</strong></label>
            <input type="text" id="cp-wno" placeholder="9898595956" ></input><br/><br/>
            </span>

            <label for="cp-wcno" ><strong>We Chat Number</strong></label>
            <input type="text" id="cp-wcno" placeholder="9898595956" ></input><br/><br/>
            </div>

            {/* product information */}
            <div className="form-group"><h2>Product Information</h2>
            <label for="p-type"><strong>Product Bentonite*</strong></label>
            <select id="p-type" name="p-type">
            {types.map((type,index)=>(
             <option  key={index} value={type} selected={type === 'Select Type'} >{type}</option>
            ))}
            </select><br/><br/>
           
            <div>
                {products.map((product, index) => (
                <React.Fragment key={index}>
                <label>
                    <input type="checkbox" name="product" value={products} /> {product}
                </label>
                {(index + 1) % 4 === 0 && <br />}
                </React.Fragment>
                ))}
            </div>
            </div><br/><br/>

            {/* product parameters  */}
            <div className="form-group"><h2>Product Parameters</h2>
            <label for="pp1" ><strong>Quality(Swelling) </strong></label>
            <input type="text" id="pp1" placeholder="Parameter" ></input>

            <span>
            <label for="pp2" style={{marginLeft:'5%'}}><strong>Quality(Viscosity) </strong></label>
            <input type="text" id="pp2" placeholder="Parameter" ></input> 
            </span>

            <span>
            <label for="pp3" style={{marginLeft:'5%'}}><strong>Quality(Color) </strong></label>
            <select id="pp3" name="pp3">
            {colors.map((color,index)=>(
             <option  key={index} value={color} selected={color === 'Yellow'} >{color}</option>
            ))}
            </select>
            </span><br/><br/>

            <label for="pp4"><strong>Quality(Plate) </strong></label>
            <input type="text" id="pp4" placeholder="Parameter" ></input>

            <span> 
            <label for="pp5"style={{marginLeft:'5%'}}><strong>Quality(Filter loss) </strong></label>
            <input type="text" id="pp5" placeholder="Parameter" ></input> 
            </span>

            <span>
            <label for="pp6"style={{marginLeft:'5%'}}><strong>Quality(MB) </strong></label>
            <input type="text" id="pp6" placeholder="Parameter" ></input> 
            </span>
            </div><br/><br/>

            {/* packing & delivery */}
            <div className="form-group"><h2>Packing & Delivery</h2>
            <label for="pd1" ><strong>Packing Type*</strong></label>
            <select id="pd1" name="pd1">
            {packingtypes.map((packingtype,index)=>(
             <option  key={index} value={packingtype} selected={packingtype === 'Select'} >{packingtype}</option>
            ))}
            </select>

            <span>
            <label for="pd2" style={{marginLeft:'5%'}}><strong>Packing Qty*</strong></label>
            <select id="pd2" name="pd2">
            {packingquant.map((packingqty,index)=>(
             <option  key={index} value={packingqty} selected={packingqty=== 'Select'} >{packingqty}</option>
            ))}
            </select>
            </span><br/><br/>


            {/* packing quantity value */}
            <label for="pd3" ><strong>Packing Quantity Value*</strong></label>
            <input type="text" id="pd3" placeholder="Packing Quantity Value" ></input> 

            <span>
            <label for="pd4" style={{marginLeft:'5%'}} ><strong>Delivery Mode*</strong></label>
            <select id="pd4" name="pd4">
            {deliverymode.map((mode,index)=>(
             <option  key={index} value={mode} selected={mode=== 'Select'} >{mode}</option>
            ))}
            </select>
            </span>
            </div><br/><br/>

            {/* get sample */}
            <div className="form-group"><h2>Get Sample</h2>
            <label for="s-address"><strong>Get Sample on Address*</strong></label>
            <textarea  id="s-address" cols="40" rows="5" ></textarea><br/><br/>

            <label for="s-country"><strong>Country*</strong></label>
            <select id="s-country" name="s-country" >
            {countries.map((country1, index) => (
            < option key={index} value={country1} selected={country1 === "Select Country"} >{country1}</option>
            ))}
            </select><br/><br/>

            <label for="s-state"><strong>State*</strong></label>
            <select id="s-state" name="s-state">
            {states.map((state1,index)=>(
             <option  key={index} value={state1} selected={states === 'Select State'} >{state1}</option>
            ))}
            </select>

            <span>
            <label for="s-city" style={{marginLeft:'5%'}}><strong>City/Village*</strong></label>
            <input type="text" id="s-city" placeholder="City/Village" ></input>
            </span><br/><br/>
    
            <label for="s-pin"><strong>Pin code or Zip code</strong></label>
            <input type="text" id="s-pin" placeholder="Pincode or Zipcode" ></input>
            </div><br/><br/>
            

            {/* other information */}
            <div className="form-group"><h2>Other Information</h2>
            <label for="note"><strong>Notes/Remark</strong></label>
            <textarea  id="note" cols="40" rows="5" ></textarea><br/><br/>

            <label for="email1"><strong>Email for Quotation*</strong></label>
            <input type="text" id="email1" placeholder="Give Email to get Quotation" ></input>
            </div><br/>
            <div>
            
            <button type ="button" >send</button>
            </div>

            </form>
        </div>

        
    );
}
export default Forms_structure;