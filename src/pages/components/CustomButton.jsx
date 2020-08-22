import React from 'react'
import {Button} from "semantic-ui-react"

 const CustomButton = (props) => {
    return (
      <div>
        <Button color="orange"
            onClick={() => props.history.push("./blog/new") }
        >New blog
        </Button>
      </div>
    );
}
export default CustomButton