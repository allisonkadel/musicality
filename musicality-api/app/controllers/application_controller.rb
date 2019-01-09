class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    def record_not_found_response
        render json: {
            errors: {
                messages: 
                    "record can't be found"
            }
        }, status: 404
    end

    def error_response(record)
        render json: {
            errors: {
                messages: record.errors.messages,
                id: record.id
            }
        }, status: 400  
    end

end
