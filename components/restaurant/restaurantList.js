import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import { 
    Button, 
    Card, 
    CardBody, 
    CardColumns, 
    CardImg, 
    CardSubtitle 
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

const RestaurantList = (
    { data: { loading, error, restaurants }, search }, req) => {
    if (error) return "Error loading restaurants";
    // if restaurants are returned from the GraphQL query, run the filter query and set equal to variable restaurantSearch

    if (restaurants && restaurants.length) {
        // search query 
        const searchQuery = restaurants.filter(query =>
        query.name.toLowerCase().include(search)
        );
        if ( searchQuery.lenght !=0 ) {
            return (
                <div>
                    <div className="h-100">
                        {searchQuery.map(res => (
                            <Card style={{ height: 250 }} src={`http://localhost:1337${res.image.url}`}>
                                <CardImg 
                                    top={true} 
                                    style={{ height: 250 }} 
                                    src={`http://localhost:1337${res.image.url}`} 
                                />
                                <CardBoy>
                                    <CardTitle>{res.name}</CardTitle>
                                    <CardText>{res.description}</CardText>
                                </CardBoy>
                                <div className="card-footer">
                                    <Link 
                                        as={`/restaurants/${res._id}`} 
                                        href={`/restaurants?id=${res._id}`}
                                    >
                                        <a className="btn btn-primary">View</a>
                                    </Link>
                                </div>
                            </Card> 
                        ))}
                    </div>
                    <style jsx global>
                        {`
                            a {
                                color: white;
                            }
                            a:link {
                                text-decoration: none;
                                color: white;
                            }
                            a:hover {
                                color: white;
                            }
                            .card-columns {
                                column-count: 3;
                            }
                        `}
                    </style>
                </div>
            );
        } else {
            return <h1>No Restaurants Found</h1>;
        }
    }
    return <h1>Loading</h1>;
};

const query = gql`
    {
        retaurants {
            _id
            name
            description
            image {
                url
            }
        }
    }
`;
RestaurantList.getInitialProps = async ({ req }) => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
};

// The `graphql` wrapper executes a GraphQL query and makes the results available on the `data` prop of the wrapper component (RestaurantList)

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(RestaurantList);