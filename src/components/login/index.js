import { h, Component } from 'preact';
import { Card, TextField, Button, CheckBox, Layout } from 'preact-mdl';

export default class Login extends Component {

	render() {
		return (
				<div class="mdl-card mdl-shadow--2dp centered">
                    <div class="mdl-card__supporting-text">
                        <form action="javascript:;">
                            <p class="">Sign in with your Account</p>
                    
                            <TextField
                                floating-label
                                label="Email"
                                type="text"
                            />
                            
					        <TextField
                                floating-label
							    label="Password"
							    type="password"
						    />

                            <CheckBox > Keep me signed in</CheckBox>
                            <div class="mdl-actions">    
                                <Button colored raised >Sign In</Button>
                            </div>
                        </form>
                    </div>
                </div>
		);
	}
}
