import React from 'react';
import { Table } from 'reactstrap';

class CountriesTable extends React.Component {
    render() {
        return (
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default CountriesTable;