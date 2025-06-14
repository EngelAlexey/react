const Ejer1 = () => {
			return (
				<div className="container">
                    <h1>Las mejores 4 series que he visto</h1>
					<p>
						No suelo ser una persona muy aficionada a las series, entre ellas hay 4 que me gustan mucho <br/>
					</p>
                        <table>
                            <tbody>
                                <tr>
                                    <tr>
                                        <td>
                                            <img id = "superman_louis"
                                                src="src/img/superman_and_louis.jpeg"
                                                alt="Superman and Louis"
                                                style={{ width: "200px", height: "200px" }}/>
                                        </td>
                                        <td>
                                            <img id = "invincible"
                                                src="src/img/invincible.jpeg"
                                                alt="Invincible"
                                                style={{ width: "200px", height: "200px" }}/>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <img id = "the_boys"
                                                src="src/img/the_boys.jpg"
                                                alt="The Boys"
                                                style={{ width: "200px", height: "200px" }}/>
                                        </td>
                                        <td>
                                            <img id = "evangelion"
                                                src="src/img/evangelion.jpg"
                                                alt="Evangelion"
                                                style={{ width: "200px", height: "200px" }}/>
                                        </td>
                                    </tr>
                                </tr>
                            </tbody>
                        </table>
                
				</div>
			);
		}

		export default Ejer1;
